import filterByTags from './filterByTags';

it('returns an array', () => {
    expect(filterByTags([{ tags: [] }], [])).toBeInstanceOf(Array);
});

it('matches a single job by a single tag', () => {
    expect(filterByTags([{ tags: ['test1'] }], ['test1']).length).toEqual(1);
    expect(filterByTags([{ tags: ['test1'] }], ['test1'])).toEqual([{ tags: ['test1'] }]);
});

it('matches a single job by multiple tags', () => {
    expect(filterByTags([{ tags: ['test1', 'test2'] }], ['test1', 'test2']).length).toEqual(1);
    expect(filterByTags([{ tags: ['test1', 'test2'] }], ['test1', 'test2'])).toEqual([{ tags: ['test1', 'test2'] }]);
});

it('matches multiple jobs by a single tag', () => {
    expect(filterByTags([{ tags: ['test1', 'test2'] }, { tags: ['test1', 'test3'] }], ['test1']).length).toEqual(2);
    expect(filterByTags([{ tags: ['test1', 'test2'] }, { tags: ['test1', 'test3'] }], ['test1'])).toEqual([{ tags: ['test1', 'test2'] }, { tags: ['test1', 'test3'] }]);
});

it('matches multiple jobs by multiple tags', () => {
    expect(filterByTags([{ tags: ['test1', 'test2', 'test3'] }, { tags: ['test1', 'test2', 'test4'] }], ['test1', 'test2']).length).toEqual(2);
    expect(filterByTags([{ tags: ['test1', 'test2', 'test3'] }, { tags: ['test1', 'test2', 'test4'] }], ['test1', 'test2'])).toEqual([{ tags: ['test1', 'test2', 'test3'] }, { tags: ['test1', 'test2', 'test4'] }]);
});

it('returns an empty array if no tags are matched', () => {
    expect(filterByTags([{ tags: ['test1', 'test2'] }], ['test3']).length).toEqual(0);
    expect(filterByTags([{ tags: ['test1', 'test2'] }], ['test3'])).toEqual([]);
});
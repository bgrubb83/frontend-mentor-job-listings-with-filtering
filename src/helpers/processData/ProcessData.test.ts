import processData from './processData';

const jobData = [{
    role: 'test-role',
    level: 'test-level',
    tools: ['test-tool-1', 'test-tool-2'],
    languages: ['test-language-1', 'test-language-2'],
}]

it('returns an object', () => {
    expect(typeof processData(jobData)).toEqual(typeof {});
});

it('returns an object with a tags array', () => {
    expect(typeof processData(jobData)[0].tags).toBe(typeof []);
});

it('returns an object with a tags array containing the correct data', () => {
    expect(processData(jobData)[0].tags).toEqual([
        "test-role",
        "test-level",
        "test-tool-1",
        "test-tool-2",
        "test-language-1",
        "test-language-2",
    ]);
});

it('handles missing role data', () => {
    const jobDataWithMissingRole = [{
        level: 'test-level',
        tools: ['test-tool-1', 'test-tool-2'],
        languages: ['test-language-1', 'test-language-2'],
    }]
    expect(processData(jobDataWithMissingRole)[0].tags).toEqual([
        "test-level",
        "test-tool-1",
        "test-tool-2",
        "test-language-1",
        "test-language-2",
    ]);
});

it('handles missing level data', () => {
    const jobDataWithMissingLevel = [{
        role: 'test-role',
        tools: ['test-tool-1', 'test-tool-2'],
        languages: ['test-language-1', 'test-language-2'],
    }]
    expect(processData(jobDataWithMissingLevel)[0].tags).toEqual([
        "test-role",
        "test-tool-1",
        "test-tool-2",
        "test-language-1",
        "test-language-2",
    ]);
});

it('handles missing tools data', () => {
    const jobDataWithMissingTools = [{
        role: 'test-role',
        level: 'test-level',
        languages: ['test-language-1', 'test-language-2'],
    }]
    expect(processData(jobDataWithMissingTools)[0].tags).toEqual([
        "test-role",
        "test-level",
        "test-language-1",
        "test-language-2",
    ]);
});

it('handles missing languages data', () => {
    const jobDataWithMissingLanguages = [{
        role: 'test-role',
        level: 'test-level',
        tools: ['test-tool-1', 'test-tool-2'],
    }]
    expect(processData(jobDataWithMissingLanguages)[0].tags).toEqual([
        "test-role",
        "test-level",
        "test-tool-1",
        "test-tool-2",
    ]);
});

it('returns and empty tags array if all required data is missing', () => {
    const jobDataWithAllMissingData = [{}]
    expect(processData(jobDataWithAllMissingData)[0].tags).toEqual([]);
});

it('returns tags in the expected order: role, level, tags, languages', () => {
    const processedJob = processData(jobData);
    expect(processedJob[0].tags[0]).toEqual('test-role');
    expect(processedJob[0].tags[1]).toEqual('test-level');    
    expect(processedJob[0].tags[2]).toEqual('test-tool-1');
    expect(processedJob[0].tags[3]).toEqual('test-tool-2');
    expect(processedJob[0].tags[4]).toEqual('test-language-1');
    expect(processedJob[0].tags[5]).toEqual('test-language-2');

    const mixedUpJobData = [{
        level: 'test-level',
        role: 'test-role',
        languages: ['test-language-1', 'test-language-2'],
        tools: ['test-tool-1', 'test-tool-2'],
    }]
    const mixedUpJob = processData(mixedUpJobData);
    expect(processedJob).toEqual(mixedUpJob);
});

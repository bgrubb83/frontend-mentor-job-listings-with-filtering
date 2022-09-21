export interface ActiveTagCardData {
    tags: string[];
    handleClearTags: () => void;
    handleRemoveTags: (tag: string) => void;
}
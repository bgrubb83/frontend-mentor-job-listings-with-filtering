export interface ActiveTagCardData {
    tags: string[];
    handleClearTags: () => void;
    handleRemoveTag: (tag: string) => void;
}
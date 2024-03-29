export interface JobCardData {
    company: string;
    contract: string;
    featured: boolean;
    id: number;
    languages: string[];
    level: string;
    location: string;
    logo: string;
    new: boolean;
    position: string;
    postedAt: string;
    role: string;
    tools: string[];
    tags?: string[];
}

export interface JobData {
    job: JobCardData;
    handleAddTag: (tag: string) => void;
}
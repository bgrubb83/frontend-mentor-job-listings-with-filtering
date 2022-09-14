import { JobCardData } from '../../components/JobCard/JobCard.d';

export default function filterByTags(processedData: any, tags: string[]): [] {
    return processedData.filter((job: JobCardData) => {
        let tagged: boolean = true;
        tags.forEach((tag: string) => {
            if (!job.tags?.includes(tag)) {
                tagged = false;
            }
        })
        return tagged;
    })
}

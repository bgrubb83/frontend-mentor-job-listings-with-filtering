import { JobCardData } from '../../components/JobCard/JobCard.d'

export default function processData(rawData: any) {
    const processedData = rawData.map((job: JobCardData) => {

        // Generate tags from job data
        const tags = [];
        tags.push(job.role);
        tags.push(job.level);
        job.tools.forEach((tool) => {
            tags.push(tool);
        })
        job.languages.forEach((language) => {
            tags.push(language);
        })
        job.tags = tags;
        return job;
    })
    return processedData;
}

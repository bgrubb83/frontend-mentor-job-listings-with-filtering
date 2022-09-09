import { JobCardData } from '../../components/JobCard/JobCard.d'

export default function processData(rawData: any) {
    const processedData = rawData.map((job: JobCardData) => {

        // Generate tags from job data
        const tags = [];
        if (job.role) tags.push(job.role);
        if (job.level) tags.push(job.level);

        if (job.tools && job.tools.length) {
            job.tools.forEach((tool) => {
                tags.push(tool);
            })
        }

        if (job.languages && job.languages.length) {
            job.languages.forEach((language) => {
                tags.push(language);
            })
        }
        job.tags = tags;
        return job;
    })
    return processedData;
}

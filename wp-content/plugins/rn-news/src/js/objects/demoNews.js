export function getDemoNews({id, title, date, description}) {
    return Object.seal({
        id,
        title,
        date,
        description
    });
}
export default function SortProjectsByDate(projects) {
    projects.sort((a, b) => new Date(b.date) - new Date(a.date))
}
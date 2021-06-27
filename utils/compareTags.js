/**
 * Compares active filter tags to project tags.
 * 
 * If a project's tags match all active filter tags, or no filter tags are active, a project is displayed.
 * @param {*} activeTags Filter tags currently active.
 * @param {*} projectTags Project tags.
 * 
 * @return {Boolean} Returns true if project tags match all active filter tags; otherwise, false.
 */
export default function compareTags(activeTags, projectTags) {

    for (let i = 0; i < activeTags.length; i++) {

        let tagMatched = false

        for (let j = 0; j < projectTags.length; j++) {

            if (activeTags[i].name == projectTags[j].name) {
                tagMatched = true
            }
        }

        if (!tagMatched) {
            return false
        }
    }
    return true
}
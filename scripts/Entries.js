/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries
    const allEntriesAsHTML = "<ul>"


    for (const entry of entries) {
        allEntriesAsHTML += `
           <li id="entrys--${entry.id}">${entry.concept}</li>
        `
    }
    allEntriesAsHTML += "</ul>"
    return allEntriesAsHTML
}
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
                of your Web application running on Netlify. The landing page should include
                the following: Your full name and section, Links to each of the lab
                assignments, Link to the Kambas application, Links to all relevant source code
                repositories, The Kambas application should include a link to Navigate back
                to the landing page.
            </textarea>
            <br /> <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">
                                ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">
                                Percentage</option>
                            <option value="POINTS">Points</option>
                            <option value="LETTER">Letter</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">
                                Online</option>
                            <option value="INPERSON">In Person</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label>Online Entry Options</label> <br />
                        <input type="checkbox" name="check-entry-type" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-entry-type" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-entry-type" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-entry-type" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-entry-type" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label> <br />
                        <input defaultValue="2025-02-14" type="date" id="wd-due-date" /><br />
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available from</label> <br />
                        <input defaultValue="2025-02-02" type="date" id="wd-available-from" /><br />
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">Until</label> <br />
                        <input defaultValue="2025-02-22" type="date" id="wd-available-until" /><br />
                    </td>
                </tr> 
                <br/>
                <tfoot>
                    <tr>
                        <td colSpan={2}></td>
                        <td align="right" valign="top">
                            <button>Cancel</button>
                            <button>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}


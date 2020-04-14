/* 
 * Application : SnowCICDTestApp
 * ClassName   : sysevent_in_email_action
 * Created On  : 2020-04-14 16:09:42
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:42
 * Updated By  : rizknt@nih.gov
 * URL         : /sysevent_in_email_action.do?sys_id=76152aa71b44541094edddb6bc4bcbc9
 */
//	Note: current.opened_by is already set to the first UserID that matches the From: email address
var bodyText = email.body_text;
if (!bodyText)
	bodyText = email.body_html;
current.work_notes = "SnowCICDTestApp Request created by email:\n\nReceived from: " + email.origemail + "\n\n" + email.subject + "\n\n" + bodyText;

if (email.importance != undefined) {
   if (email.importance.toLowerCase() == "high")
      current.priority = 1;
}

var newId = current.insert();
gs.eventQueue('sr.request.email.creation', current, newId, email.from);

/* 
 * Application : SnowCICDTestApp
 * ClassName   : sysevent_in_email_action
 * Created On  : 2020-04-14 16:09:42
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:42
 * Updated By  : rizknt@nih.gov
 * URL         : /sysevent_in_email_action.do?sys_id=76152aa71b44541094edddb6bc4bcbcc
 */
if (current.getTableName() == "x_g_nci_snowcicdtestapp_request") {
	var bodyText = email.body_text;
	if (!bodyText)
		bodyText = email.body_html;
	current.work_notes = "Reply from: " + email.origemail + "\n\n" + email.subject + "\n\n" + bodyText;	
	current.update();
}

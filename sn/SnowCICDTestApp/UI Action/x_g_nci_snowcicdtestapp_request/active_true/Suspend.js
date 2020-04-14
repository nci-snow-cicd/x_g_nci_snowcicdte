/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:54
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:54
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=43e4a2671b44541094edddb6bc4bcb7c
 */
if (current.work_notes != '') {
	new global.StateFlow().processFlow(current, '8be4a2671b44541094edddb6bc4bcb7b', 'manual');
} else {
	gs.addErrorMessage(gs.getMessage('Provide a reason for suspension in Work notes'));
	action.setRedirectURL(current);
}

/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:57
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:58
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=f7e4e2671b44541094edddb6bc4bcb4d
 */
if (current.work_notes != '')
	new global.StateFlow().processFlow(current, '33e4e2671b44541094edddb6bc4bcb4d', 'manual');
else {
	gs.addErrorMessage(gs.getMessage('Provide a reason for suspension in Work notes'));
	current.setAbortAction(true);
}

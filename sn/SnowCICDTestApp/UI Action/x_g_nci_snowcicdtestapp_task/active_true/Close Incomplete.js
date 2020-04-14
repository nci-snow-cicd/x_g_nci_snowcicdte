/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_ui_action
 * Created On  : 2020-04-14 16:08:56
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:08:56
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_ui_action.do?sys_id=2fe4a2671b44541094edddb6bc4bcbf0
 */
function openFollowOnPopUp(){
	var dialogClass;
    try {
    	 dialogClass = GlideModal;
    } catch(e) {
    	dialogClass = GlideDialogWindow;
    }
	var dialog = new dialogClass("service_management_task_closed_incomplete");
    dialog.setWidth("550");
	dialog.setTitle("Close Incomplete");
	dialog.setPreference("sys_id", g_form.getUniqueValue());
	dialog.setPreference("work_notes", g_form.getValue("work_notes"));
	dialog.setPreference("state_flow_id", "67e4a2671b44541094edddb6bc4bcbf0");
	dialog.render(); //Open the dialog
}

/* 
 * Application : SnowCICDTestApp
 * ClassName   : sys_navigator
 * Created On  : 2020-04-14 16:09:44
 * Created By  : rizknt@nih.gov
 * Updated On  : 2020-04-14 16:09:44
 * Updated By  : rizknt@nih.gov
 * URL         : /sys_navigator.do?sys_id=07156aa71b44541094edddb6bc4bcb2e
 */
var url = '';
var sysid = g_uri.get('sys_id');
var isCompatible = sn_sm.SMTemplateCompatibility.getCompatibility();
if (isCompatible == 'block') {
	url =  g_uri.toString(); 
}
else {
   g_uri.set('sysparm_sys_id', sysid);
   g_uri.set('sysparm_record_target','x_g_nci_snowcicdtestapp_request_template');
   g_uri.set('sysparm_title','SnowCICDTestApp Request Template');
   g_uri.set('sysparm_app_name','snowcicdtestapp');
   url =  g_uri.toString('$sm_templates.do');
}
url;

module.exports = function(app) {
    var reports = require('../controller/controller');

    app.route('/reports')
        .get(reports.list_all_reports)
        .post(reports.create_a_report);

    app.route('/reports/:reportID')
        .get(reports.get_a_report)
        .put(reports.update_a_report)
        .delete(reports.delete_a_report);
    
    app.route('/filter')
        .post(reports.get_reports_by_type);
};
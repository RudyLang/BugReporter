var mysql = require('./db.js');

var Report = function(report) {
    this.type = report.type;
    this.comment = report.comment;
    this.timestamp = new Date();
}

Report.createReport = function (newReport, result) {
    mysql.query("INSERT INTO reports SET ?", newReport, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            console.log(res.insertID);
            result(null, res.insertID);
        }
    });
};

Report.getReportByID = function (reportID, result) {
    mysql.query("SELECT * FROM reports WHERE id = ?", reportID, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Report.getReportsByType = function(reportTypes, result) {
    let list = JSON.stringify(reportTypes.reportTypes).slice(1, -1); // reportTypes contain array, need to convert to ('a','b') format
    mysql.query(`SELECT * FROM reports WHERE type IN (${list})`, function (err, res) {
        if (err) {
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
}

Report.getAllReports = function (result) {
    mysql.query("SELECT * FROM reports", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            console.log('reports: ', res);
            result(null, res);
        }
    });
};

Report.remove = function (id, result) {
    mysql.query("DELETE FROM reports WHERE id = ?", [id], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Report;
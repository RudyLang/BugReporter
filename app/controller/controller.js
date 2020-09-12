var Report = require("../model/model.js");

exports.list_all_tasks = function (req, res) {
    Report.getAllReports(function(err, report) {
        if (err) {
            res.send(err);
            console.log('res', report);
        }
        res.send(report);
    });
};

exports.create_a_task = function (req, res) {
    var newReport = new Report(req.body);

    if (!newReport.type || !newReport.comment) {
        res.status(400).send({ error:true, message: 'Missing report type and comment' });
    }
    else {
        Report.createReport(newReport, function(err, report) {
            if (err) {
                res.send(err);
            }
            res.json(report);
        });
    };
};

exports.read_a_task = function (req, res) {
    Report.getReportByID(req.params.reportID, function(err, report) {
        if (err) {
            res.send(err);
        }
        res.json(report);
    });
};

exports.update_a_report = function(req, res) {
    Report.updateByID(req.params.reportID, new Report(req.body), function(err, report) {
        if (err) {
            res.send(err);
        }
        res.json(report);
    });
};

exports.delete_a_task = function(req, res) {
    Report.remove(req.params.reportID, function(err, report) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Report Successfully Deleted' });
    });
};
var auth = require('../model/auth')

auth.require_token((data) => {
 // let token = data.data.accessToken
})

var result = {}
exports.run = function () {
    /** **
        if (iswork == false) {
            iswork = true;
            var rule = new schedule.RecurrenceRule();
            var secs = [16, 20, 40];
            rule.minute = secs;
            schedule.scheduleJob(rule, function () {
                var server = com2server.postToServer();
                if (token) {
                    console.log('计算对帐.');
                    for (let i = 0; i < hoururls.length; i++) {
                        server.post(hoururls[i],
                            {
                                accessToken: token

                            }).
                            success(function (data) {

                                console.log(data);
                            })
                            .error(function (data) {
                                auth.require_token(
                                    function (data) {
                                        token = data.data.accessToken;

                                    })
                            });

                    }

                }

            });

            var dayrule = new schedule.RecurrenceRule();
            var hours = [1, 11, 23];
            dayrule.hours= hours;
            dayrule.hour= hours;
            schedule.scheduleJob(dayrule, function () {

                auth.require_token(
                    function (data) {
                        daytoken = data.data.accessToken;

                        for (let i = 0; i < dayurls.length; i++) {
                            server.post(dayurls[i],
                                {
                                    accessToken: daytoken

                                }).
                                success(function (data) {

                                    console.log(data);
                                })
                                .error(function (data) {
                                    auth.require_token(
                                        function (data) {
                                            token = data.data.accessToken;

                                        })
                                });

                        }

                    });

            });

        }

    **/
}

exports.getcash = function () {
  return result
}
exports.pending = 0
exports.cash = 0
exports.session = ''

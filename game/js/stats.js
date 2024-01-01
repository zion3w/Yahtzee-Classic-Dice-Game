if (document.querySelector('#app-stats')) {
	var url = document.querySelector('[data-stats-url]').getAttribute('data-stats-url');
	url = url + '?get-stats&game_type';
	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			// console.log(data)

			var templateStats = document.querySelector('#app-stats-template');
			var templatePosition = document.querySelector('#app-stats-position-template');

			for (var gameType in data) {
				console.log(data);

				var gameTypeStatsArr = data[gameType];

				var templateStatsClone = templateStats.content.cloneNode(true);
				templateStatsClone.querySelector('.stats_game_type span').innerText = gameType;
				// console.log(templateStatsClone);

				for (var i = 0, l = gameTypeStatsArr.length; i < l; i++) {
					var templatePositionClone = templatePosition.content.cloneNode(true);

					// templatePositionClone.querySelector('.stats_index').innerText = i+1;
					templatePositionClone.querySelector('.stats_uname').innerText = gameTypeStatsArr[i].uname;
					templatePositionClone.querySelector('.stats_score').innerText = gameTypeStatsArr[i].score;
					var date = new Date(gameTypeStatsArr[i].date * 1000);
					// console.log(date.toLocaleDateString("en-US"));
					templatePositionClone.querySelector('.stats_date').innerText = date.toLocaleDateString();
					// templatePositionClone.querySelector('.stats_date').innerText = date.toLocaleString();

					templateStatsClone.querySelector('.stats_game').appendChild(templatePositionClone);
				}
				document.querySelector('#app_stats_container').appendChild(templateStatsClone);
			}
		});
}

			function getAjax(url, content, callback) {
				$.ajax({
					type: "get",
					url: url,
					data: content,
					success: data => {
						if(data.code == 0) callback(data)
						else alert(data.msg)
					}
				});
			}

			function postAjax(url, content, callback) {
				$.ajax({
					type: "post",
					url: url,
					data: content,
					success: data => {
						if(data.code == 0) callback(data)
						else alert(data.msg)
					}
				});
			}

			var urlSearch = location.search
			var params = new Object()
			if(urlSearch.indexOf("?") == 0) {
				var paramsString = urlSearch.substr(1)
				var paramLink = paramsString.split("&linkUrl=")
				params.linkUrl = paramLink[1]
				var paramsStrings = paramLink[0].split("&")
				for(var i = 0; i < paramsStrings.length; i++) {
					params[paramsStrings[i].split("=")[0]] = paramsStrings[i].split("=")[1];
				}
			}
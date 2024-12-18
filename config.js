// TODO: move to github env variables
export const WEATHER_API_KEY = '15a662508ba94518964174204241511'

// api url
export const WEATHER_API_URL = 'https://api.weatherapi.com/v1/'
export const FORECAST_API_URL = 'https://api.weatherapi.com/v1/forecast.json'
export const HISTORY_API_URL = 'https://api.weatherapi.com/v1/history.json'
export const CURRENT_API_URL = 'https://api.weatherapi.com/v1/current.json'
export const ASTRO_API_URL = 'https://api.weatherapi.com/v1/astronomy.json'

// constants
export const LANGUAGES = { ru: 'Русский', en: 'English' }
export const THEMES = { light: 'light', dark: 'dark', default: 'light' }
export const DEFAULT_SITY = 'Minsk'

// get user location from browser
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const latitude = position.coords.latitude
			const longitude = position.coords.longitude
			localStorage.setItem(
				'location',
				JSON.stringify({ latitude, longitude }),
			)
		},
		(error) => {
			console.warn(error.message)
		},
	)
} else {
	console.warn('Объект Geolocation не поддерживается вашим браузером')
}
export const DEFAULT_LOCATION = localStorage.getItem('location')
	? // query location
	  // q=[latitude],[longitude]
	  JSON.parse(localStorage.getItem('location')).latitude +
	  ',' +
	  JSON.parse(localStorage.getItem('location')).longitude
	: // default sity
	  DEFAULT_SITY

export const DEFAULT_LANG = localStorage.getItem('lang')
	? localStorage.getItem('lang')
	: LANGUAGES.ru

export const DEFAULT_DATE = new Date().toISOString().split('T')[0]
export const DEFAULT_DAYS_COUNT = 3

// api types
export const API_DEFAULT_FORECAST_TYPES = {
	current: 'current',
	forecast: 'forecast',
	history: 'history',
}
export const API_FORECAST_TYPES = {
	...API_DEFAULT_FORECAST_TYPES,
	tomorrow: 'tomorrow',
	yesterday: 'yesterday',
	random: 'random',
	astronomy: 'astronomy',
}

export const ROUTES = {
	main: '/',
	story: '/story',
	sity: '/sity',
}

export const INDICATOR_TYPES = {
	temperature: 'temperature',
	wind: 'wind',
	pressure: 'pressure',
	clouds: 'clouds',
	humidity: 'humidity',
}

// TODO: добавить больше городов
export const Locations = [
	'St. Petersburg',
	'London',
	'london',
	'Berlin',
	'berlin',
	'Oslo',
	'oslo',
	'New York',
	'new york',
	'new york city',
	'San Francisco',
	'san francisco',
	'Tokyo',
	'tokyo',
	'Paris',
	'paris',
	'Barcelona',
	'barcelona',
	'Rio de Janeiro',
	'rio de janeiro',
	'Johannesburg',
	'johannesburg',
	'Sydney',
	'sydney',
	'Vancouver',
	'vancouver',
	'New Delhi',
	'new delhi',
	'Shanghai',
	'shanghai',
	'Beijing',
	'beijing',
	'Seoul',
	'seoul',
	'Los Angeles',
	'los angeles',
	'Mumbai',
	'mumbai',
	'Melbourne',
	'melbourne',
	'Singapore',
	'singapore',
	'Toronto',
	'toronto',
	'Montreal',
	'montreal',
	'Vancouver',
	'vancouver',
	'Calgary',
	'calgary',
	'Edmonton',
	'edmonton',
	'Winnipeg',
	'winnipeg',
	'Halifax',
	'halifax',
	'Quebec City',
	'quebec city',
	'Charlottesville',
	'charlottesville',
	'Nashville',
	'nashville',
	'Atlanta',
	'atlanta',
	'Orlando',
	'orlando',
	'Knoxville',
	'knoxville',
	'Louisville',
	'louisville',
	'Moscow',
	'moscow',
	'Seoul',
	'seoul',
	'Tehran',
	'tehran',
	'Jakarta',
	'jakarta',
	'Kuala Lumpur',
	'kuala lumpur',
	'Kathmandu',
	'kathmandu',
	'Kolkata',
	'kolkata',
	'Chennai',
	'chennai',
	'Buenos Aires',
	'buenos aires',
	'Santiago',
	'santiago',
	'Mexico City',
	'mexico city',
	'Los Angeles',
	'los angeles',
	'Minsk',
	'minsk',
	'Brest',
	'brest',
	'Vladivostok',
	'vladivostok',
	'Samara',
	'samara',
	'Yekaterinburg',
	'yekaterinburg',
	'Kazan',
	'kazan',
	'Novosibirsk',
	'novosibirsk',
	'Krasnoyarsk',
	'krasnoyarsk',
	'Chelyabinsk',
	'chelyabinsk',
	'Nizhny Novgorod',
	'nizhny novgorod',
	'Vilnius',
	'vilnius',
	'Zaporozhye',
	'zaporozhye',
	'Kyiv',
	'kyiv',
	'Kharkiv',
	'kharkiv',
	'Odessa',
	'odessa',
	'Lviv',
	'lviv',
	'Kherson',
	'kherson',
	'Kiev',
	'kiev',
	'Gdansk',
	'gdansk',
	'Gdynia',
	'gdynia',
	'Wroclaw',
	'wroclaw',
	'Warsaw',
	'warsaw',
	'Poznan',
	'poznan',
	'Krakow',
	'krakow',
	'Wroclaw',
	'wroclaw',
	'Gdansk',
	'gdansk',
	'Gdynia',
	'gdynia',
	'Grodno',
	'grodno',
	'Gomel',
	'gomel',
	'Rome',
	'rome',
	'Bangkok',
	'bangkok',
	'Shenzhen',
	'shenzhen',
	'Bogota',
	'bogota',
	'Lagos',
	'lagos',
	'Kinshasa',
	'kinshasa',
	'Khartoum',
	'khartoum',
	'Cairo',
	'cairo',
	'Lahore',
	'lahore',
	'Dhaka',
	'dhaka',
	'Karachi',
	'karachi',
	'Chongqing',
	'chongqing',
	'Tianjin',
	'tianjin',
	'Guangzhou',
	'guangzhou',
	'Shenyang',
	'shenyang',
	'Chengdu',
	'chengdu',
	'Xian',
	'xian',
	'Changsha',
	'changsha',
	'Nanchang',
	'nanchang',
	'Nanjing',
	'nanjing',
	'Fuzhou',
	'fuzhou',
	'Hangzhou',
	'hangzhou',
	'Wuhan',
	'wuhan',
	'Harare',
	'harare',
	'Hanoi',
	'hanoi',
	'Kolkata',
	'kolkata',
	'Brisbane',
	'brisbane',
	'Perth',
	'perth',
	'Adelaide',
	'adelaide',
	'Auckland',
	'auckland',
	'Cape Town',
	'cape town',
	'Johannesburg',
	'johannesburg',
	'Pretoria',
	'pretoria',
	'Durban',
	'durban',
	'Abidjan',
	'abidjan',
	'Accra',
	'accra',
	'Nairobi',
	'nairobi',
	'Kampala',
	'kampala',
	'Lusaka',
	'lusaka',
	'Maputo',
	'maputo',
	'Windhoek',
	'windhoek',
]

export const Langs = [
	'af',
	'sq',
	'ar',
	'hy',
	'az',
	'eu',
	'be',
	'bn',
	'bs',
	'bg',
	'ca',
	'ceb',
	'zh-CN',
	'zh-TW',
	'co',
	'hr',
	'cs',
	'da',
	'nl',
	'en',
	'en-GB',
	'en-US',
	'eo',
	'et',
	'fi',
	'fr',
	'fy',
	'gl',
	'ka',
	'de',
	'el',
	'gu',
	'ht',
	'ha',
	'haw',
	'he',
	'hi',
	'hmn',
	'hu',
	'is',
	'ig',
	'id',
	'ga',
	'it',
	'ja',
	'jw',
	'kn',
	'kk',
	'km',
	'ko',
	'ku',
	'ky',
	'lo',
	'la',
	'lv',
	'lt',
	'lb',
	'mk',
	'mg',
	'ms',
	'ml',
	'mt',
	'mi',
	'mr',
	'mn',
	'my',
	'ne',
	'no',
	'ny',
	'or',
	'ps',
	'fa',
	'pl',
	'pt',
	'pa',
	'ro',
	'ru',
	'sm',
	'gd',
	'sr',
	'st',
	'sn',
	'sd',
	'si',
	'sk',
	'sl',
	'so',
	'es',
	'su',
	'sw',
	'sv',
	'tg',
	'ta',
	'te',
	'th',
	'tr',
	'uk',
	'ur',
	'ug',
	'uz',
	'vi',
	'cy',
	'xh',
	'yi',
	'yo',
	'zu',
]

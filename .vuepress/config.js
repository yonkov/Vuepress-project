module.exports = {

   title: 'WordSana',
   description: 'More than a Dictionary Enemmän kuin sanakirjaa',

   themeConfig: {

       nav: [
         { text: 'Home', link: '/' },
		 { text: 'About', link: '/about/' },
         { text: 'Lessons', link: '/lessons/' },
         { text: 'Категории', link: '/categories/' }
       ],

	   sidebar: [
      '/',
	  ['/about/', 'About'],
	  '/lessons/'
    ]
	  //  sidebar: [
    //   ['/', 'Начало'],
	  // ['/about/', 'За мен'],
	  // ['/lessons/', 'Уроци']
    // ]



   }
}

module.exports = {

   title: 'VuePress',

   description: 'Just playing around',

   themeConfig: {

       nav: [
         { text: 'Home', link: '/' },
		 { text: 'About', link: '/about/' },
         { text: 'Lessons', link: '/lessons/' }
       ],
	   
	   sidebar: [
      '/',
	  ['/about/', 'About'],
	  '/lessons/'
    ]
   }
}
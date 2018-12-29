module.exports = {

   title: 'Teach English',

   description: 'Уроци по английски за преподаватели',

   themeConfig: {

       nav: [
         { text: 'Начало', link: '/' },
		 { text: 'За мен', link: '/about/' },
         { text: 'Уроци', link: '/lessons/' },
         { text: 'Категории', link: '/categories/' }
       ],
	   
	  //  sidebar: [
    //   ['/', 'Начало'],
	  // ['/about/', 'За мен'],
	  // ['/lessons/', 'Уроци']
    // ]


    sidebar: {
      '/lessons/': [
        '',     
        'first-lesson',
        'second-lesson' 
        /* Add more lesson urls here*/
      ],

      '/': [
        ['/', 'Начало'],
	      ['/about/', 'За мен'],
	      ['/lessons/', 'Уроци']
      ]
    }

   }
}
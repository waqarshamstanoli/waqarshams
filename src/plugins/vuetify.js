import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  
    theme: {
      dark: true,
        themes: {
          light: {
            primary: '#0EA7E9',
            secondary: '#344161',
            success:'#000000',
            gray:'#7E9CC7',
            icon:'#344161',
            blue:'#6b4ef8',
            btnText:'#000000',
            svg_color:"#ffffff"

            
           
           
          },
          dark: {
            primary: '#0EA7E9',
            secondary:'#B9E0F2',
            success:'#ffffff',
            gray:'#7E9CC7',
            icon:'#0EA7E9',
            blue:'#6b4ef8',
            btnText:'#ffffff',
            svg_color:"#000000"

          },
          
        },
      },
});

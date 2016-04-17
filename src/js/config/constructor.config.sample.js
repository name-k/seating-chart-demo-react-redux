export default {
  constructor : {
    items : [

      {
        name : 'Square table',
        type : 'table-square',
        image : '',
        properties : [
          {
            name : 'size',
            type : 'single-value',
            value : ['1x1', '2x2', '3x3'],
          },
          {
            name : 'chairs-top-side',
            type : 'range-number-value',
            value : [0, 10],
          },
          {
            name : 'chairs-bottom-side',
            type : 'range-number-value',
            value : [0, 10],
          },
          {
            name : 'chairs-left-side',
            type : 'range-number-value',
            value : [0, 10],
          },
          {
            name : 'chairs-right-side',
            type : 'range-number-value',
            value : [0, 10],
          }
        ]
      },

      {
        name : 'Round table',
        type : 'table-round',
        image : '',
        properties : [
          {
            name : 'size',
            type : 'single-value',
            value : ['1x1', '2x2', '3x3'],
          },
          {
            name : 'chairs-along-radius',
            type : 'range-number-value',
            value : [0, 20],
          }
        ]
      }

    ],
  },
};
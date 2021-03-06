const config = {
  mode : 'default',
  constructorData : {
    items : [

      {
        name : 'Square table',
        id   : 'table-square',
        type : 'table-square',
        image : 'svg/table_only_square_4.svg',
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
        name : 'Rectangle table',
        id : 'table-rectangle',
        type : 'table-rectangle',
        image : 'svg/table_only_rectangle_8.svg',
        properties : [
          {
            name : 'size',
            type : 'single-value',
            value : ['1x1', '2x2', '3x3'],
          }
        ]
      },

      {
        name : 'Round table',
        id : 'table-round',
        type : 'table-round',
        image : 'svg/table_only_circle_4.svg',
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

export default config;
module.exports = config;
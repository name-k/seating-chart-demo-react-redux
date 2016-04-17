const config = {
  id : 'test-chart-id',
  name : 'My test chart',

  canvasObjects : [
    {
      id       : 'object-id-1',
      type     : 'table-square',
      name     : 'My square table',
      position : [10, 10],
      properties : [
        {
          name : 'size',
          value : 2,
        },
        {
          name : 'chairs-top-side',
          value : 2,
        },
        {
          name : 'chairs-bottom-side',
          value : 3,
        },
        {
          name : 'chairs-left-side',
          value : 4,
        },
        {
          name : 'chairs-right-side',
          value : 2,
        }
      ],
    },

    {
      id       : 'object-id-2',
      position : [300, 350],
      name     : 'My round table',
      type     : 'table-round',
      properties : [
        {
          name : 'size',
          value : 0,
        },
        {
          name : 'chairs-along-radius',
          value : 11,
        }
      ]
    }

  ]

};

export default config;
module.exports = config;
const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0t03MneSPxBa-_wrkqgz5V5PWx-yirqZwCJLGyHrddq_KNBzS',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR82Akl7qEJXEKu2dbMx2tT1UR9oO0r_0jsjky7Bxve6mwoeqXp',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: 'https://nssdata.s3.amazonaws.com/images/galleries/18643/SOTY-cover.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'womens',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZjaB3Q2LSuXPrglNI4o8_V1lZW1ajstorkmrswOcouyEvgI9T',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'mens',
            imageUrl: 'https://blog.portea.com/wp-content/uploads/2017/07/Happy-men.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
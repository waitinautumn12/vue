const hotPonit = (track) => {
  const arr = {
    E43: [
      [
        [0, 264, 698],
        [1, 208, 698],
        [2, 162, 696],
        [3, 121, 697],
        [4, 91, 697],
        [5, 67, 694],
        [6, 52, 694],
        [7, 44, 691],
        [32, 454, 692],
        [33, 406, 698],
        [34, 356, 698],
        [35, 309, 701]
      ],
      [
        [0, 416, 636],
        [1, 378, 634],
        [2, 343, 634],
        [3, 305, 639],
        [4, 271, 637],
        [5, 240, 637],
        [6, 218, 634],
        [7, 200, 633],
        [8, 188, 634],
        [9, 182, 634],
        [10, 181, 634],
        [11, 188, 634],
        [12, 195, 634],
        [35, 455, 638]
      ]
    ],
    E63: [
      [
        [0, 416, 636],
        [1, 378, 634],
        [2, 343, 634],
        [3, 305, 639],
        [4, 271, 637],
        [5, 240, 637],
        [6, 218, 634],
        [7, 200, 633],
        [8, 188, 634],
        [9, 182, 634],
        [10, 181, 634],
        [11, 188, 634],
        [12, 195, 634],
        [35, 455, 638]
      ]
    ],
    E63S: [
      [
        [0, 264, 698],
        [1, 208, 698],
        [2, 162, 696],
        [3, 121, 697],
        [4, 91, 697],
        [5, 67, 694],
        [6, 52, 694],
        [7, 44, 691],
        [32, 454, 692],
        [33, 406, 698],
        [34, 356, 698],
        [35, 309, 701]
      ],
      [
        [0, 364, 698],
        [1, 308, 698],
        [2, 262, 696],
        [3, 221, 697],
        [4, 191, 697],
        [5, 167, 694],
        [6, 152, 694],
        [7, 44, 691],
        [32, 454, 692],
        [33, 406, 698],
        [34, 356, 698],
        [35, 309, 701]
      ],
      [
        [0, 416, 636],
        [1, 378, 634],
        [2, 343, 634],
        [3, 305, 639],
        [4, 271, 637],
        [5, 240, 637],
        [6, 218, 634],
        [7, 200, 633],
        [8, 188, 634],
        [9, 182, 634],
        [10, 181, 634],
        [11, 188, 634],
        [12, 195, 634],
        [35, 455, 638]
      ]
    ]
  }
  for (let prop in arr) {
    if (prop === track) {
      return arr[prop]
    }
  }
}

export {
  hotPonit
}

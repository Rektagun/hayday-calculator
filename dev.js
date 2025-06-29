const express = require("express");
const neo4j = require("neo4j-driver");
const cors = require("cors");
const { CursorTimeoutMode } = require("mongodb");
const { all } = require("axios");
const axios = require('axios').default;
const app = express();
require('dotenv').config()
app.use(cors());
app.use(express.json());

let recipes = [
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 0,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
            "name": "Wheat",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 3,
              "high": 0
            },
            "productionTime": {
              "low": 2,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
        },
        "end": {
          "identity": {
            "low": 0,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
            "name": "Wheat",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 3,
              "high": 0
            },
            "productionTime": {
              "low": 2,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 0,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
                "name": "Wheat",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 3,
                  "high": 0
                },
                "productionTime": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            },
            "relationship": {
              "identity": {
                "low": 0,
                "high": 268435712
              },
              "start": {
                "low": 0,
                "high": 0
              },
              "end": {
                "low": 0,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474752",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            },
            "end": {
              "identity": {
                "low": 0,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
                "name": "Wheat",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 3,
                  "high": 0
                },
                "productionTime": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 2,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/2/26/Egg.png/revision/latest/scale-to-width-down/100?cb=20191025193420",
            "name": "Egg",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 18,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2"
        },
        "end": {
          "identity": {
            "low": 4,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 3,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
            "name": "Chicken Feed",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 2,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/2/26/Egg.png/revision/latest/scale-to-width-down/100?cb=20191025193420",
                "name": "Egg",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 18,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2"
            },
            "relationship": {
              "identity": {
                "low": 4,
                "high": 1610612992
              },
              "start": {
                "low": 2,
                "high": 0
              },
              "end": {
                "low": 4,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917530127152709636",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
            },
            "end": {
              "identity": {
                "low": 4,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 3,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
                "name": "Chicken Feed",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 4,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 3,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
            "name": "Chicken Feed",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
        },
        "end": {
          "identity": {
            "low": 0,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
            "name": "Wheat",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 3,
              "high": 0
            },
            "productionTime": {
              "low": 2,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 4,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 3,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
                "name": "Chicken Feed",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
            },
            "relationship": {
              "identity": {
                "low": 4,
                "high": 269484288
              },
              "start": {
                "low": 4,
                "high": 0
              },
              "end": {
                "low": 0,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1157426203745845252",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            },
            "end": {
              "identity": {
                "low": 0,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
                "name": "Wheat",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 3,
                  "high": 0
                },
                "productionTime": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 4,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 3,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
            "name": "Chicken Feed",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
        },
        "end": {
          "identity": {
            "low": 5,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
            "name": "Corn",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 4,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 3,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
                "name": "Chicken Feed",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
            },
            "relationship": {
              "identity": {
                "low": 4,
                "high": 268960000
              },
              "start": {
                "low": 4,
                "high": 0
              },
              "end": {
                "low": 5,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1155174403932160004",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            },
            "end": {
              "identity": {
                "low": 5,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
                "name": "Corn",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 5,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
            "name": "Corn",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
        },
        "end": {
          "identity": {
            "low": 5,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
            "name": "Corn",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 5,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
                "name": "Corn",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            },
            "relationship": {
              "identity": {
                "low": 5,
                "high": 268435712
              },
              "start": {
                "low": 5,
                "high": 0
              },
              "end": {
                "low": 5,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474757",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            },
            "end": {
              "identity": {
                "low": 5,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
                "name": "Corn",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 6,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e1/Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073518",
            "name": "Bread",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 21,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:6"
        },
        "end": {
          "identity": {
            "low": 0,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
            "name": "Wheat",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 3,
              "high": 0
            },
            "productionTime": {
              "low": 2,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 6,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e1/Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073518",
                "name": "Bread",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 21,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:6"
            },
            "relationship": {
              "identity": {
                "low": 6,
                "high": 268435712
              },
              "start": {
                "low": 6,
                "high": 0
              },
              "end": {
                "low": 0,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 3,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474758",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:6",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            },
            "end": {
              "identity": {
                "low": 0,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
                "name": "Wheat",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 3,
                  "high": 0
                },
                "productionTime": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 9,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 5,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
            "name": "Soybean",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 10,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
        },
        "end": {
          "identity": {
            "low": 9,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 5,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
            "name": "Soybean",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 10,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 9,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 5,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
                "name": "Soybean",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 10,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
            },
            "relationship": {
              "identity": {
                "low": 9,
                "high": 268435712
              },
              "start": {
                "low": 9,
                "high": 0
              },
              "end": {
                "low": 9,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474761",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
            },
            "end": {
              "identity": {
                "low": 9,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 5,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
                "name": "Soybean",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 10,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 10,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
            "name": "Cow Feed",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 10,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
        },
        "end": {
          "identity": {
            "low": 5,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
            "name": "Corn",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 10,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
                "name": "Cow Feed",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 10,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
            },
            "relationship": {
              "identity": {
                "low": 10,
                "high": 268435712
              },
              "start": {
                "low": 10,
                "high": 0
              },
              "end": {
                "low": 5,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474762",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            },
            "end": {
              "identity": {
                "low": 5,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
                "name": "Corn",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 10,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
            "name": "Cow Feed",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 10,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
        },
        "end": {
          "identity": {
            "low": 9,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 5,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
            "name": "Soybean",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 10,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 10,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
                "name": "Cow Feed",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 10,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
            },
            "relationship": {
              "identity": {
                "low": 10,
                "high": 268960000
              },
              "start": {
                "low": 10,
                "high": 0
              },
              "end": {
                "low": 9,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1155174403932160010",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
            },
            "end": {
              "identity": {
                "low": 9,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 5,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
                "name": "Soybean",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 10,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 11,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/92/Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193427",
            "name": "Milk",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 32,
              "high": 0
            },
            "productionTime": {
              "low": 60,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11"
        },
        "end": {
          "identity": {
            "low": 10,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
            "name": "Cow Feed",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 10,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 11,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/92/Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193427",
                "name": "Milk",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 32,
                  "high": 0
                },
                "productionTime": {
                  "low": 60,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11"
            },
            "relationship": {
              "identity": {
                "low": 11,
                "high": 268435712
              },
              "start": {
                "low": 11,
                "high": 0
              },
              "end": {
                "low": 10,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474763",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
            },
            "end": {
              "identity": {
                "low": 10,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
                "name": "Cow Feed",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 10,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 13,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/8/83/Cream.png/revision/latest/scale-to-width-down/100?cb=20240205163032",
            "name": "Cream",
            "xp": {
              "low": 6,
              "high": 0
            },
            "maxPrice": {
              "low": 50,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:13"
        },
        "end": {
          "identity": {
            "low": 11,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/92/Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193427",
            "name": "Milk",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 32,
              "high": 0
            },
            "productionTime": {
              "low": 60,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 13,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/8/83/Cream.png/revision/latest/scale-to-width-down/100?cb=20240205163032",
                "name": "Cream",
                "xp": {
                  "low": 6,
                  "high": 0
                },
                "maxPrice": {
                  "low": 50,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:13"
            },
            "relationship": {
              "identity": {
                "low": 13,
                "high": 268435712
              },
              "start": {
                "low": 13,
                "high": 0
              },
              "end": {
                "low": 11,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474765",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:13",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11"
            },
            "end": {
              "identity": {
                "low": 11,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/92/Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193427",
                "name": "Milk",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 32,
                  "high": 0
                },
                "productionTime": {
                  "low": 60,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 15,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
            "name": "Sugarcane",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
        },
        "end": {
          "identity": {
            "low": 15,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
            "name": "Sugarcane",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 15,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
                "name": "Sugarcane",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
            },
            "relationship": {
              "identity": {
                "low": 15,
                "high": 268435712
              },
              "start": {
                "low": 15,
                "high": 0
              },
              "end": {
                "low": 15,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474767",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
            },
            "end": {
              "identity": {
                "low": 15,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
                "name": "Sugarcane",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 16,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/1/1d/Corn_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073836",
            "name": "Corn Bread",
            "xp": {
              "low": 8,
              "high": 0
            },
            "maxPrice": {
              "low": 72,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16"
        },
        "end": {
          "identity": {
            "low": 2,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/2/26/Egg.png/revision/latest/scale-to-width-down/100?cb=20191025193420",
            "name": "Egg",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 18,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 16,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/1/1d/Corn_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073836",
                "name": "Corn Bread",
                "xp": {
                  "low": 8,
                  "high": 0
                },
                "maxPrice": {
                  "low": 72,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16"
            },
            "relationship": {
              "identity": {
                "low": 16,
                "high": 268960000
              },
              "start": {
                "low": 16,
                "high": 0
              },
              "end": {
                "low": 2,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1155174403932160016",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2"
            },
            "end": {
              "identity": {
                "low": 2,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/2/26/Egg.png/revision/latest/scale-to-width-down/100?cb=20191025193420",
                "name": "Egg",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 18,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 16,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/1/1d/Corn_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073836",
            "name": "Corn Bread",
            "xp": {
              "low": 8,
              "high": 0
            },
            "maxPrice": {
              "low": 72,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16"
        },
        "end": {
          "identity": {
            "low": 5,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
            "name": "Corn",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 16,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/1/1d/Corn_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073836",
                "name": "Corn Bread",
                "xp": {
                  "low": 8,
                  "high": 0
                },
                "maxPrice": {
                  "low": 72,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16"
            },
            "relationship": {
              "identity": {
                "low": 16,
                "high": 268435712
              },
              "start": {
                "low": 16,
                "high": 0
              },
              "end": {
                "low": 5,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474768",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            },
            "end": {
              "identity": {
                "low": 5,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
                "name": "Corn",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 17,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/02/Brown_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163705",
            "name": "Brown Sugar",
            "xp": {
              "low": 4,
              "high": 0
            },
            "maxPrice": {
              "low": 32,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:17"
        },
        "end": {
          "identity": {
            "low": 15,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
            "name": "Sugarcane",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 17,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/02/Brown_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163705",
                "name": "Brown Sugar",
                "xp": {
                  "low": 4,
                  "high": 0
                },
                "maxPrice": {
                  "low": 32,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:17"
            },
            "relationship": {
              "identity": {
                "low": 17,
                "high": 268435712
              },
              "start": {
                "low": 17,
                "high": 0
              },
              "end": {
                "low": 15,
                "high": 0
              },
              "type": "REQUIRES",
              "properties": {
                "amount": {
                  "low": 1,
                  "high": 0
                }
              },
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152922604118474769",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:17",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
            },
            "end": {
              "identity": {
                "low": 15,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
                "name": "Sugarcane",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  }
];

let itemResults = [
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 0,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
            "name": "Wheat",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 3,
              "high": 0
            },
            "productionTime": {
              "low": 2,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
        },
        "end": {
          "identity": {
            "low": 1,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Field"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 0,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e2/Wheat.png/revision/latest/scale-to-width-down/100?cb=20240218150024",
                "name": "Wheat",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 3,
                  "high": 0
                },
                "productionTime": {
                  "low": 2,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0"
            },
            "relationship": {
              "identity": {
                "low": 1,
                "high": 1610612736
              },
              "start": {
                "low": 0,
                "high": 0
              },
              "end": {
                "low": 1,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081857",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:0",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            },
            "end": {
              "identity": {
                "low": 1,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Field"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 2,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 1,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/2/26/Egg.png/revision/latest/scale-to-width-down/100?cb=20191025193420",
            "name": "Egg",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 18,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2"
        },
        "end": {
          "identity": {
            "low": 3,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Chicken"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:3"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 2,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 1,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/2/26/Egg.png/revision/latest/scale-to-width-down/100?cb=20191025193420",
                "name": "Egg",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 18,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2"
            },
            "relationship": {
              "identity": {
                "low": 3,
                "high": 1610612736
              },
              "start": {
                "low": 2,
                "high": 0
              },
              "end": {
                "low": 3,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081859",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:2",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:3"
            },
            "end": {
              "identity": {
                "low": 3,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Chicken"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:3"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 4,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 3,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
            "name": "Chicken Feed",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
        },
        "end": {
          "identity": {
            "low": 8,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Feed Mill"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 4,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 3,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/6a/Chicken_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161950",
                "name": "Chicken Feed",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4"
            },
            "relationship": {
              "identity": {
                "low": 8,
                "high": 1610612736
              },
              "start": {
                "low": 4,
                "high": 0
              },
              "end": {
                "low": 8,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081864",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:4",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
            },
            "end": {
              "identity": {
                "low": 8,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Feed Mill"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 5,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
            "name": "Corn",
            "xp": {
              "low": 1,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
        },
        "end": {
          "identity": {
            "low": 1,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Field"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 5,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f8/Corn.png/revision/latest/scale-to-width-down/100?cb=20240218151631",
                "name": "Corn",
                "xp": {
                  "low": 1,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5"
            },
            "relationship": {
              "identity": {
                "low": 5,
                "high": 268435456
              },
              "start": {
                "low": 5,
                "high": 0
              },
              "end": {
                "low": 1,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606846981",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:5",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            },
            "end": {
              "identity": {
                "low": 1,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Field"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 6,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 2,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e1/Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073518",
            "name": "Bread",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 21,
              "high": 0
            },
            "productionTime": {
              "low": 5,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:6"
        },
        "end": {
          "identity": {
            "low": 7,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Bakery"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 6,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 2,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e1/Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073518",
                "name": "Bread",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 21,
                  "high": 0
                },
                "productionTime": {
                  "low": 5,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:6"
            },
            "relationship": {
              "identity": {
                "low": 7,
                "high": 1610612736
              },
              "start": {
                "low": 6,
                "high": 0
              },
              "end": {
                "low": 7,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081863",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:6",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
            },
            "end": {
              "identity": {
                "low": 7,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Bakery"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 9,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 5,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
            "name": "Soybean",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 10,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
        },
        "end": {
          "identity": {
            "low": 1,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Field"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 9,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 5,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/9e/Soybean.png/revision/latest/scale-to-width-down/100?cb=20240219031547",
                "name": "Soybean",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 10,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9"
            },
            "relationship": {
              "identity": {
                "low": 9,
                "high": 268435456
              },
              "start": {
                "low": 9,
                "high": 0
              },
              "end": {
                "low": 1,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606846985",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:9",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            },
            "end": {
              "identity": {
                "low": 1,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Field"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 10,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
            "name": "Cow Feed",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 10,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
        },
        "end": {
          "identity": {
            "low": 8,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Feed Mill"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 10,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Cow_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161956",
                "name": "Cow Feed",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 10,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10"
            },
            "relationship": {
              "identity": {
                "low": 10,
                "high": 268435456
              },
              "start": {
                "low": 10,
                "high": 0
              },
              "end": {
                "low": 8,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606846986",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:10",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
            },
            "end": {
              "identity": {
                "low": 8,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Feed Mill"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 11,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/92/Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193427",
            "name": "Milk",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 32,
              "high": 0
            },
            "productionTime": {
              "low": 60,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11"
        },
        "end": {
          "identity": {
            "low": 12,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Cow"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:12"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 11,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/9/92/Milk.png/revision/latest/scale-to-width-down/100?cb=20191025193427",
                "name": "Milk",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 32,
                  "high": 0
                },
                "productionTime": {
                  "low": 60,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11"
            },
            "relationship": {
              "identity": {
                "low": 12,
                "high": 1610612736
              },
              "start": {
                "low": 11,
                "high": 0
              },
              "end": {
                "low": 12,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081868",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:11",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:12"
            },
            "end": {
              "identity": {
                "low": 12,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Cow"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:12"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 13,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 6,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/8/83/Cream.png/revision/latest/scale-to-width-down/100?cb=20240205163032",
            "name": "Cream",
            "xp": {
              "low": 6,
              "high": 0
            },
            "maxPrice": {
              "low": 50,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:13"
        },
        "end": {
          "identity": {
            "low": 14,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Dairy"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 13,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 6,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/8/83/Cream.png/revision/latest/scale-to-width-down/100?cb=20240205163032",
                "name": "Cream",
                "xp": {
                  "low": 6,
                  "high": 0
                },
                "maxPrice": {
                  "low": 50,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:13"
            },
            "relationship": {
              "identity": {
                "low": 14,
                "high": 1610612736
              },
              "start": {
                "low": 13,
                "high": 0
              },
              "end": {
                "low": 14,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081870",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:13",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
            },
            "end": {
              "identity": {
                "low": 14,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Dairy"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 15,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
            "name": "Sugarcane",
            "xp": {
              "low": 3,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
        },
        "end": {
          "identity": {
            "low": 1,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Field"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 15,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/03/Sugarcane.png/revision/latest/scale-to-width-down/100?cb=20240219031727",
                "name": "Sugarcane",
                "xp": {
                  "low": 3,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15"
            },
            "relationship": {
              "identity": {
                "low": 15,
                "high": 268435456
              },
              "start": {
                "low": 15,
                "high": 0
              },
              "end": {
                "low": 1,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606846991",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:15",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            },
            "end": {
              "identity": {
                "low": 1,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Field"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 16,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/1/1d/Corn_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073836",
            "name": "Corn Bread",
            "xp": {
              "low": 8,
              "high": 0
            },
            "maxPrice": {
              "low": 72,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16"
        },
        "end": {
          "identity": {
            "low": 7,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Bakery"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 16,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/1/1d/Corn_Bread.png/revision/latest/scale-to-width-down/100?cb=20240205073836",
                "name": "Corn Bread",
                "xp": {
                  "low": 8,
                  "high": 0
                },
                "maxPrice": {
                  "low": 72,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16"
            },
            "relationship": {
              "identity": {
                "low": 16,
                "high": 268435456
              },
              "start": {
                "low": 16,
                "high": 0
              },
              "end": {
                "low": 7,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606846992",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:16",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
            },
            "end": {
              "identity": {
                "low": 7,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Bakery"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 17,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 7,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/02/Brown_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163705",
            "name": "Brown Sugar",
            "xp": {
              "low": 4,
              "high": 0
            },
            "maxPrice": {
              "low": 32,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:17"
        },
        "end": {
          "identity": {
            "low": 18,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Sugar Mill"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:18"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 17,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 7,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/02/Brown_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163705",
                "name": "Brown Sugar",
                "xp": {
                  "low": 4,
                  "high": 0
                },
                "maxPrice": {
                  "low": 32,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:17"
            },
            "relationship": {
              "identity": {
                "low": 18,
                "high": 1610612736
              },
              "start": {
                "low": 17,
                "high": 0
              },
              "end": {
                "low": 18,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081874",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:17",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:18"
            },
            "end": {
              "identity": {
                "low": 18,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Sugar Mill"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:18"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 19,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 8,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/8/85/Popcorn.png/revision/latest/scale-to-width-down/100?cb=20240206170036",
            "name": "Popcorn",
            "xp": {
              "low": 4,
              "high": 0
            },
            "maxPrice": {
              "low": 32,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:19"
        },
        "end": {
          "identity": {
            "low": 20,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Popcorn Pot"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:20"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 19,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 8,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/8/85/Popcorn.png/revision/latest/scale-to-width-down/100?cb=20240206170036",
                "name": "Popcorn",
                "xp": {
                  "low": 4,
                  "high": 0
                },
                "maxPrice": {
                  "low": 32,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:19"
            },
            "relationship": {
              "identity": {
                "low": 20,
                "high": 1610612736
              },
              "start": {
                "low": 19,
                "high": 0
              },
              "end": {
                "low": 20,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081876",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:19",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:20"
            },
            "end": {
              "identity": {
                "low": 20,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Popcorn Pot"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:20"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 21,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 9,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/c/c3/Carrot.png/revision/latest/scale-to-width-down/100?cb=20240218151353",
            "name": "Carrot",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 7,
              "high": 0
            },
            "productionTime": {
              "low": 10,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:21"
        },
        "end": {
          "identity": {
            "low": 1,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Field"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 21,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 9,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/c/c3/Carrot.png/revision/latest/scale-to-width-down/100?cb=20240218151353",
                "name": "Carrot",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 7,
                  "high": 0
                },
                "productionTime": {
                  "low": 10,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:21"
            },
            "relationship": {
              "identity": {
                "low": 21,
                "high": 268435456
              },
              "start": {
                "low": 21,
                "high": 0
              },
              "end": {
                "low": 1,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606846997",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:21",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            },
            "end": {
              "identity": {
                "low": 1,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Field"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 22,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 9,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f1/Butter.png/revision/latest/scale-to-width-down/100?cb=20240205163128",
            "name": "Butter",
            "xp": {
              "low": 10,
              "high": 0
            },
            "maxPrice": {
              "low": 82,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:22"
        },
        "end": {
          "identity": {
            "low": 14,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Dairy"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 22,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 9,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f1/Butter.png/revision/latest/scale-to-width-down/100?cb=20240205163128",
                "name": "Butter",
                "xp": {
                  "low": 10,
                  "high": 0
                },
                "maxPrice": {
                  "low": 82,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:22"
            },
            "relationship": {
              "identity": {
                "low": 22,
                "high": 268435456
              },
              "start": {
                "low": 22,
                "high": 0
              },
              "end": {
                "low": 14,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606846998",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:22",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
            },
            "end": {
              "identity": {
                "low": 14,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Dairy"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 23,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 9,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/62/Pancake.png/revision/latest/scale-to-width-down/100?cb=20240205164109",
            "name": "Pancake",
            "xp": {
              "low": 13,
              "high": 0
            },
            "maxPrice": {
              "low": 108,
              "high": 0
            },
            "productionTime": {
              "low": 30,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:23"
        },
        "end": {
          "identity": {
            "low": 24,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "BBQ Grill"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:24"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 23,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 9,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/62/Pancake.png/revision/latest/scale-to-width-down/100?cb=20240205164109",
                "name": "Pancake",
                "xp": {
                  "low": 13,
                  "high": 0
                },
                "maxPrice": {
                  "low": 108,
                  "high": 0
                },
                "productionTime": {
                  "low": 30,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:23"
            },
            "relationship": {
              "identity": {
                "low": 24,
                "high": 1610612736
              },
              "start": {
                "low": 23,
                "high": 0
              },
              "end": {
                "low": 24,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081880",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:23",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:24"
            },
            "end": {
              "identity": {
                "low": 24,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "BBQ Grill"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:24"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 25,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 10,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e4/Pig_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161939",
            "name": "Pig Feed",
            "xp": {
              "low": 2,
              "high": 0
            },
            "maxPrice": {
              "low": 14,
              "high": 0
            },
            "productionTime": {
              "low": 20,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:25"
        },
        "end": {
          "identity": {
            "low": 8,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Feed Mill"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 25,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 10,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/e/e4/Pig_Feed.png/revision/latest/scale-to-width-down/100?cb=20150712161939",
                "name": "Pig Feed",
                "xp": {
                  "low": 2,
                  "high": 0
                },
                "maxPrice": {
                  "low": 14,
                  "high": 0
                },
                "productionTime": {
                  "low": 20,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:25"
            },
            "relationship": {
              "identity": {
                "low": 25,
                "high": 268435456
              },
              "start": {
                "low": 25,
                "high": 0
              },
              "end": {
                "low": 8,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606847001",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:25",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
            },
            "end": {
              "identity": {
                "low": 8,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Feed Mill"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:8"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 26,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 10,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Bacon.png/revision/latest/scale-to-width-down/100?cb=20191025193433",
            "name": "Bacon",
            "xp": {
              "low": 5,
              "high": 0
            },
            "maxPrice": {
              "low": 50,
              "high": 0
            },
            "productionTime": {
              "low": 240,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:26"
        },
        "end": {
          "identity": {
            "low": 27,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Pig"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:27"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 26,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 10,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/f6/Bacon.png/revision/latest/scale-to-width-down/100?cb=20191025193433",
                "name": "Bacon",
                "xp": {
                  "low": 5,
                  "high": 0
                },
                "maxPrice": {
                  "low": 50,
                  "high": 0
                },
                "productionTime": {
                  "low": 240,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:26"
            },
            "relationship": {
              "identity": {
                "low": 27,
                "high": 1610612736
              },
              "start": {
                "low": 26,
                "high": 0
              },
              "end": {
                "low": 27,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081883",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:26",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:27"
            },
            "end": {
              "identity": {
                "low": 27,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Pig"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:27"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 28,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 10,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/7/70/Cookie.png/revision/latest/scale-to-width-down/100?cb=20240205074046",
            "name": "Cookie",
            "xp": {
              "low": 13,
              "high": 0
            },
            "maxPrice": {
              "low": 104,
              "high": 0
            },
            "productionTime": {
              "low": 60,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:28"
        },
        "end": {
          "identity": {
            "low": 7,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Bakery"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 28,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 10,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/7/70/Cookie.png/revision/latest/scale-to-width-down/100?cb=20240205074046",
                "name": "Cookie",
                "xp": {
                  "low": 13,
                  "high": 0
                },
                "maxPrice": {
                  "low": 104,
                  "high": 0
                },
                "productionTime": {
                  "low": 60,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:28"
            },
            "relationship": {
              "identity": {
                "low": 28,
                "high": 268435456
              },
              "start": {
                "low": 28,
                "high": 0
              },
              "end": {
                "low": 7,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606847004",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:28",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
            },
            "end": {
              "identity": {
                "low": 7,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Bakery"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:7"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 29,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 11,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/a/a6/Bacon_and_Eggs.png/revision/latest/scale-to-width-down/100?cb=20240205164211",
            "name": "Bacon and Eggs",
            "xp": {
              "low": 24,
              "high": 0
            },
            "maxPrice": {
              "low": 201,
              "high": 0
            },
            "productionTime": {
              "low": 60,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:29"
        },
        "end": {
          "identity": {
            "low": 24,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "BBQ Grill"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:24"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 29,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 11,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/a/a6/Bacon_and_Eggs.png/revision/latest/scale-to-width-down/100?cb=20240205164211",
                "name": "Bacon and Eggs",
                "xp": {
                  "low": 24,
                  "high": 0
                },
                "maxPrice": {
                  "low": 201,
                  "high": 0
                },
                "productionTime": {
                  "low": 60,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:29"
            },
            "relationship": {
              "identity": {
                "low": 29,
                "high": 268435456
              },
              "start": {
                "low": 29,
                "high": 0
              },
              "end": {
                "low": 24,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606847005",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:29",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:24"
            },
            "end": {
              "identity": {
                "low": 24,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "BBQ Grill"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:24"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 30,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 12,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/a/a5/Cheese.png/revision/latest/scale-to-width-down/100?cb=20240205163241",
            "name": "Cheese",
            "xp": {
              "low": 15,
              "high": 0
            },
            "maxPrice": {
              "low": 122,
              "high": 0
            },
            "productionTime": {
              "low": 60,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:30"
        },
        "end": {
          "identity": {
            "low": 14,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Dairy"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 30,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 12,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/a/a5/Cheese.png/revision/latest/scale-to-width-down/100?cb=20240205163241",
                "name": "Cheese",
                "xp": {
                  "low": 15,
                  "high": 0
                },
                "maxPrice": {
                  "low": 122,
                  "high": 0
                },
                "productionTime": {
                  "low": 60,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:30"
            },
            "relationship": {
              "identity": {
                "low": 30,
                "high": 268435456
              },
              "start": {
                "low": 30,
                "high": 0
              },
              "end": {
                "low": 14,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606847006",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:30",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
            },
            "end": {
              "identity": {
                "low": 14,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Dairy"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:14"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 31,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 13,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/4/48/Indigo.png/revision/latest/scale-to-width-down/100?cb=20191023151432",
            "name": "Indigo",
            "xp": {
              "low": 5,
              "high": 0
            },
            "maxPrice": {
              "low": 25,
              "high": 0
            },
            "productionTime": {
              "low": 120,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:31"
        },
        "end": {
          "identity": {
            "low": 1,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Field"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 31,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 13,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/4/48/Indigo.png/revision/latest/scale-to-width-down/100?cb=20191023151432",
                "name": "Indigo",
                "xp": {
                  "low": 5,
                  "high": 0
                },
                "maxPrice": {
                  "low": 25,
                  "high": 0
                },
                "productionTime": {
                  "low": 120,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:31"
            },
            "relationship": {
              "identity": {
                "low": 31,
                "high": 268435456
              },
              "start": {
                "low": 31,
                "high": 0
              },
              "end": {
                "low": 1,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606847007",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:31",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            },
            "end": {
              "identity": {
                "low": 1,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Field"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 32,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 13,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/ff/White_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163815",
            "name": "White Sugar",
            "xp": {
              "low": 6,
              "high": 0
            },
            "maxPrice": {
              "low": 50,
              "high": 0
            },
            "productionTime": {
              "low": 40,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:32"
        },
        "end": {
          "identity": {
            "low": 18,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Sugar Mill"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:18"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 32,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 13,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/f/ff/White_Sugar.png/revision/latest/scale-to-width-down/100?cb=20240205163815",
                "name": "White Sugar",
                "xp": {
                  "low": 6,
                  "high": 0
                },
                "maxPrice": {
                  "low": 50,
                  "high": 0
                },
                "productionTime": {
                  "low": 40,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:32"
            },
            "relationship": {
              "identity": {
                "low": 32,
                "high": 268435456
              },
              "start": {
                "low": 32,
                "high": 0
              },
              "end": {
                "low": 18,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606847008",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:32",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:18"
            },
            "end": {
              "identity": {
                "low": 18,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Sugar Mill"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:18"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 33,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 14,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/0b/Carrot_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207083902",
            "name": "Carrot Pie",
            "xp": {
              "low": 10,
              "high": 0
            },
            "maxPrice": {
              "low": 82,
              "high": 0
            },
            "productionTime": {
              "low": 60,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:33"
        },
        "end": {
          "identity": {
            "low": 34,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Pie Oven"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:34"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 33,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 14,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/0/0b/Carrot_Pie.png/revision/latest/scale-to-width-down/100?cb=20240207083902",
                "name": "Carrot Pie",
                "xp": {
                  "low": 10,
                  "high": 0
                },
                "maxPrice": {
                  "low": 82,
                  "high": 0
                },
                "productionTime": {
                  "low": 60,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:33"
            },
            "relationship": {
              "identity": {
                "low": 34,
                "high": 1610612736
              },
              "start": {
                "low": 33,
                "high": 0
              },
              "end": {
                "low": 34,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:6917529027641081890",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:33",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:34"
            },
            "end": {
              "identity": {
                "low": 34,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Pie Oven"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:34"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  },
  {
    "keys": [
      "p"
    ],
    "length": 1,
    "_fields": [
      {
        "start": {
          "identity": {
            "low": 35,
            "high": 0
          },
          "labels": [
            "Item"
          ],
          "properties": {
            "level": {
              "low": 15,
              "high": 0
            },
            "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/64/Pumpkin.png/revision/latest/scale-to-width-down/100?cb=20240219030742",
            "name": "Pumpkin",
            "xp": {
              "low": 6,
              "high": 0
            },
            "maxPrice": {
              "low": 32,
              "high": 0
            },
            "productionTime": {
              "low": 180,
              "high": 0
            }
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:35"
        },
        "end": {
          "identity": {
            "low": 1,
            "high": 0
          },
          "labels": [
            "ProductionLocation"
          ],
          "properties": {
            "name": "Field"
          },
          "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
        },
        "segments": [
          {
            "start": {
              "identity": {
                "low": 35,
                "high": 0
              },
              "labels": [
                "Item"
              ],
              "properties": {
                "level": {
                  "low": 15,
                  "high": 0
                },
                "imageUrl": "https://static.wikia.nocookie.net/hayday/images/6/64/Pumpkin.png/revision/latest/scale-to-width-down/100?cb=20240219030742",
                "name": "Pumpkin",
                "xp": {
                  "low": 6,
                  "high": 0
                },
                "maxPrice": {
                  "low": 32,
                  "high": 0
                },
                "productionTime": {
                  "low": 180,
                  "high": 0
                }
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:35"
            },
            "relationship": {
              "identity": {
                "low": 35,
                "high": 268435456
              },
              "start": {
                "low": 35,
                "high": 0
              },
              "end": {
                "low": 1,
                "high": 0
              },
              "type": "PRODUCED_IN",
              "properties": {},
              "elementId": "5:a8921243-799a-49f0-8496-7468460c4c25:1152921504606847011",
              "startNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:35",
              "endNodeElementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            },
            "end": {
              "identity": {
                "low": 1,
                "high": 0
              },
              "labels": [
                "ProductionLocation"
              ],
              "properties": {
                "name": "Field"
              },
              "elementId": "4:a8921243-799a-49f0-8496-7468460c4c25:1"
            }
          }
        ],
        "length": 1
      }
    ],
    "_fieldLookup": {
      "p": 0
    }
  }
];


// let ingredients = [];

// recipes.forEach((recipe) => {
//   let { _fields: recipesFields } = recipe;
//   console.log(recipesFields);
// })

let itemDetails = [];
let allRecipes = [];

itemResults.forEach((itemResultsItem) => {
  itemResultsItem._fields.forEach((forEachField) => {
    let productionLocation = forEachField.end.properties.name;
    forEachField.segments.forEach((forEachSegment) => {
      let name = forEachSegment.start.properties.name;
      let xp = forEachSegment.start.properties.xp.low;
      let level = forEachSegment.start.properties.level.low;
      let imageUrl = forEachSegment.start.properties.imageUrl;
      let maxPrice = forEachSegment.start.properties.maxPrice.low;
      let productionTime = forEachSegment.start.properties.productionTime.low;
      itemDetails.push({
        name, xp, level, imageUrl, maxPrice, productionTime, productionLocation,
      })
    })
    itemDetails.push({
      productionLocation,
    })
  })
})

console.log(itemDetails);

recipes.forEach((eachRecipe) => {
  eachRecipe._fields.forEach((forEachRecipe) => {
    forEachRecipe.segments.forEach((inSegment) => {
      let itemName = inSegment.start.properties.name;
      let requireCount = inSegment.relationship.properties.amount.low;
      let requireName = inSegment.end.properties.name;
      allRecipes.push(
        { itemName, requireCount, requireName }
      )
    })
  })
})

console.log(allRecipes)

// results.forEach((parentObject) => {
//   parentObject._fields.forEach((partOfParentObject) => {
//     const { segments } = partOfParentObject;
//     console.log(segments)
//     // partOfParentObject.segments.forEach((eachSegment) => {
//     //   eachSegment.start.properties.name
//     // })
//   })
// })

// return {
//   name: partOfParentObject.start.properties.name,
//   xp: partOfParentObject.start.properties.xp,
//   level: partOfParentObject.start.properties.level,
//   maxPrice: partOfParentObject.start.properties.maxPrice,
//   imageUrl: partOfParentObject.start.properties.imageUrl,
//   productionTime: partOfParentObject.start.properties.productionTime
// }

// console.log(mappedResults);

// results.forEach((currentItem) => {
//   let currentObj = currentItem._fields;
//   currentObj.forEach((currentProperty) => {
//     itemDetails = {
//       name: currentProperty.start.properties.name,
//       xp: currentProperty.start.properties.xp.low,
//       level: currentProperty.start.properties.level.low,
//       imageUrl: currentProperty.start.properties.imageUrl,
//       maxPrice: currentProperty.start.properties.maxPrice.low,
//       productionTime: currentProperty.start.properties.productionTime.low,
//     }
//     currentProperty.segments.forEach((segmentProperty) => {
//       if (segmentProperty.relationship.type == "REQUIRES") {
//       }
//     });
//   })
// })

// console.log(itemDetails)

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

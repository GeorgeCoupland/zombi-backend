# zombi-backass

# COMPONENTS
- home-page
- auth-page
- profile-show-page:
- profile-edit-page:
- allies-index-page
- map-show-pag
- map-create-page
- map-edit-page
- 404 error-page
- 500 error-page

---
# BACK END ROUTES
## AUTH
Method   | Route                       | Does what?                              |
|:-------|:----------------------------|:-----------------------------------------|
|post    |/auth/login                  | creates a new session                    |
|post    |/auth/signup                 | creates a new user and logs them in      |
|post    |/auth/logout                 | logs out user session                    |
|get     |/auth/me                     | retrieve current user info               |

## ITEM
Method   | Route                       | Does what?                              |
|:-------|:----------------------------|:-----------------------------------------|
|get     |/locations                       | shows the list                                                         oflocations               
         |
|post    |/locations                       | creates a new item         


// ---- Lower Priority              |

|put     |/locations/:id                   | updates an item                          |
|delete  |/locations/:id                   | change status of the item                |
|get     |/locations/:id                   | shows the item detail page               |

## PROFILE
Method   | Route                       | Does What?                              |
|:-------|:----------------------------|:-----------------------------------------|
|get     |/users/:id                   | shows the users detail page              |
|put     |/users/:id/update            | updates an user                          |
|get     /users/                       | show all users

# USER STORIES
As a visitor you can:
- access the homepage
- sign up
As a user you can:
- access the homepage
- log in
- see your profile
- see other profiles
- access the map
- create new items(s) e.g. zombie/ally/enemy
- edit an item
- see the list/map of items
- see the details of an item
- remove an item
- filter the items by category

# FRONT END SERVICES
- User
- Auth
- Location

## MODELS

```
User {
  username: {
    type: string,
    required: true
  },
  email: {
    type: string,
    required: true
    unique: true
  },
  password: {
    type: string,
    required: true
  }
}

```
Location {
  name: {
    type: string,
    required: true
  },
  location: {
    type: coordinate,
    required: true
  },
  size: {
    type: number,
    required: true
  },
  reporter: {
    type: string,
    required: true,
  },
  type: {
    type: array,
    required: true
  }, 
}

# Toffeechat v1.1.0
An online application dedicated to allowing users to have pleasurable conversations online!  At the current stage, Toffeechat's functionality is developed as a social media website where users can make posts, likes, and comments.  Toffeechat is an application designed to exhibit the usage of EmberJS, Ruby on Rails and GraphQL. 

&nbsp;

&nbsp;

# Technologies Utilized

Throughout the development of this website, I utilized the multiple versions of the frontend application stacked with GraphQL and a Ruby On Rails backend application, utilizing various technologies such as:

- **Ember JS CLI:** Invoked the use of an Ember frontend version with the Ember command line interface.
- **Ember Apollo Client:** Invoked Ember Apollo Client for frontend GraphQL requests.
- **Handlebars:** Developed in handlebars format for the page and component templates.
- **Bootstrap:** Developed Ember JS frontend in Bootstrap CSS for easier development.
- **JSON Web Token:** Utilized JSON Web Token JWT bearer tokens for login and context functionality.
- **JWT GraphQL Integration:** Integrated JWT into GraphQL requests via extending the Ember Apollo Service.
- **BCrypt:** Invoked BCrypt into the Ruby ORM for encrypting password digests.

&nbsp;

&nbsp;

**Note:** I also utilized Ember Simple Auth, invoking the OAuth2PasswordGrant authenticator to invoke the login request handling.  However I only used it for that purpose, and I handled the rest of the session management locally, so I will not put it on the technologies utilized on this release.

&nbsp;

&nbsp;

# Practices Utilized

Throughout the frontend development of this application, I incorporated various coding practices including:

- **Separating GraphQL Queries and Components:** Separated graphQL queries into their own file or files to provide improved organization of the app components.
- **Abstractification:** Practiced abstractification to various frontend components for ease of development.
- **Ruby Foreign Key Relations:** Established and enforced proper foreign key relations for each of the backend data models.
- **Visual Design Principles:** Adhered to various visual design practices in developing the 3 frontend versions such as the Rule of 3's, Balance, Color Contrast, White Space, etc.
- **GraphQL Query Type Organization:** Organized GraphQL query types in the Ruby on Rails based on CRUD functionality.
- **CSS Reuse and Modularity:** Modularized various CSS class for ease of developing style combinations for various components.
- **Password Encryption:** Stored hashed passwords in the database to ensure maximal credential security.
- **JWT Context Validation:** Set up JWT context validation on various endpoints to ensure authorized API requests only.

&nbsp;

&nbsp;

## Github Repositories

[https://github.com/kyleuniversities/toffee-chat](https://github.com/kyleuniversities/toffee-chat)


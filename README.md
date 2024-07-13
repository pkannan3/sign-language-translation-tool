# sign-language-translation-tool

Tools: Python, Django, RESTful API, Postman Agent

Task Description:
The API allows users to submit text input and receive a simple response indicating successful translation.

Requirements:
- Implement a single API endpoint for:
  - Receiving text input in English.
  - Generating a simple response indicating successful translation.
- Use appropriate HTTP methods (e.g., POST) and status codes.
- Simulate the translation process without integrating with external services or libraries.
- Ensure basic error handling and validation.
- Provide minimal documentation for your API endpoint.

Test via Postman Agent:
1. Navigate to "sign-language-translation-tool" directory
2. Activate virtual enviornment: source ./.venv/bin/activate
2. python manage.py runserver
3. Create a new request using:
    a. http://localhost:8000/translator/
    b. Navigate to "Body", then select "raw", enter the following:
        {
            "message": "hello"
        }

Run Locally:
- Step 1:
  1. cd backend
  2. source ./.venv/bin/source
  3. python manage.py run server
- Step 2 (in a new terminal):
  1. cd frontend
  2. npm run dev
- Step 3
  1. Launch http://localhost:5173/translator/ in browser

GitHub Repository:
https://github.com/pkannan3/sign-language-translation-tool

Reference Material:
- Previous projects/notes
- https://www.django-rest-framework.org/api-guide/views/#api_view
- https://www.django-rest-framework.org/tutorial/2-requests-and-responses/#request-objects
- https://www.django-rest-framework.org/api-guide/status-codes/
- https://react.dev/
- https://react-bootstrap.netlify.app/

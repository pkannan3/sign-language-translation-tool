# from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


"""
  This API Endpoint allows users to submit text input.
  In return there is a simple response indicating successful translation.

  Method: POST

  If request is a POST:
    If there is an expected input:
      Return success message and HTTP status 200 response.
    Else if there is no input:
      Return unsuccessful translation message and HTTP status 400 response.

  Else if request is not a POST:
    Return a request not allowed message and HTTP status 405 response.
"""


# POST request - Message to be translated
@api_view(['POST'])
def user_input(request):
    if request.method == 'POST':
        input_message = request.data.get('message', '')

        if input_message:
            translated_message = f"Translated Message: {input_message}"
            return Response({
                "message": "Successful Translation!",
                "translated_message": translated_message
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "message": "Translation Unsuccessful."
            }, status=status.HTTP_400_BAD_REQUEST)

    return Response({
        "message": "Requested method is not allowed."
    }, status=status.HTTP_405_METHOD_NOT_ALLOWED)

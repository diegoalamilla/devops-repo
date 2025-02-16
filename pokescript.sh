#!/bin/bash

if [ -z "$1" ]; then
    echo "No parameter passed"
    exit 1
fi

POKEMON=$1
RESPONSE=$(curl "https://pokeapi.co/api/v2/pokemon/$POKEMON")

if [ -z "$RESPONSE" ]; then
    echo "Error: La respuesta está vacía"
    exit 1
fi


ID=$(echo "$RESPONSE" | jq '.id')
NAME=$(echo "$RESPONSE" | jq -r '.name')
WEIGHT=$(echo "$RESPONSE" | jq '.weight')
HEIGHT=$(echo "$RESPONSE" | jq '.height')
ORDER=$(echo "$RESPONSE" | jq '.order')

echo "$NAME (No. $ID)"
echo "Id = $ID"
echo "Weight = $WEIGHT"
echo "Height = $HEIGHT"

FILENAME="pokemon_api_data.csv"

if [ ! -f "$FILENAME" ]; then
    echo "id,name,weight,height,order" > "$FILENAME"
fi

echo "$ID,$NAME,$WEIGHT,$HEIGHT,$ORDER" >> "$FILENAME"

const Base64 = require('js-base64').Base64;

// Get nth letter from end of text.
function getFromEnd(text, index) {
  const length = text.length;
  if(index > length) {
    return false;
  }
  return text.substring(length-index-1, length-index);
}

module.exports = {
  encodeKey: function(user_id) {
    /* Encode a user id into an api key:
     * 1. Concatenate four characters from the user id. Last, 3rd last, 4th last and 8th last.
     * 2. Base64 encode the user id itself.
     * 3. Concatenate the prefix characters and encoded user id.
     */

    // Get characters
    const prefix = '' + 
      getFromEnd(user_id, 0) +
      getFromEnd(user_id, 2) +
      getFromEnd(user_id, 3) +
      getFromEnd(user_id, 7);

    // Concatenate encoded prefix and user id
    let encoded = prefix + Base64.encode(user_id);

    return encoded;
  },

  decodeKey: function(encoded) {
    // Encode non-prefix part.
    let remains =  encoded.substring(4,encoded.length);
    remains = Base64.decode(remains);

    return remains;
  }
}
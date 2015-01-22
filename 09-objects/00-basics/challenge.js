module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var courseObject = {
    title: (courseTitle),
    duration: (courseDuration),
    students: courseStudents
  }
  return courseObject;
};

module.exports.addProperty = function(object, newProp, newValue){
  if (!object.hasOwnProperty(newProp)){
    object[newProp] = (newValue);

  }
  return object;
};

module.exports.formLetter = function(letter) {
  var letter = {
    recipient: (newRecipient) ,
    sender: (newSender),
    message: (newMessage)
  }
  return ("Hello " (letter.recipient));

};

module.exports.canIGet = function(item, money) {

};
#pragma strict

/*
  Basic Linear Movement (Limited Distance) Touch Controller for LightHouse.
  Developped by Trent Rand, December 16th, 2014.

  Current Beta as of December 16th, 2014.
*/

// ***INCOMPLETE*** //

var object : GameObject; //Attached GameObject
var distance = 0.3f; //Distance from spawn location it is allowed to travel. Leave at 0, if infinite.
var speed = 0.1f; //Speed the GameObject can move.
var direction : Vector3; //Direction of its movement.
var centre : Transform; //Centre/Spawn Location.

function Start () {

}

function Update () {

  for (var touch : Touch in Input.touches) { //Call for touch input method.
    if (Input.touchCount  > 0) {
      var ray = Camera.main.ScreenPointToRay(touch.position);
      var hit : RaycastHit;

      if (Physics.Raycast (ray, hit, 100)) {
      if (hit.collider.gameObject == object) {
      if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
        var plane : Plane = new Plane(Vector3.up, object.transform.position);
        var rayDistance : float;

        if (plane.Raycast(ray, rayDistance)) {
          var startPosition = object.transform.position;
          var endPosition = ray.GetPoint(rayDistance);

          var InputDistance = endPosition - startPosition;

   //       object.transform.Translate(direction * InputDistance);

      //      if (distance != 0){

    //        if (endPosition - centre > distance || endPosition - centre < -distance) {
             // yield;

            }
          }
        }
      }
    }
  }
}
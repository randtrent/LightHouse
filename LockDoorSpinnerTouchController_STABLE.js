#pragma strict

/*
  Basic Rotational Touch Controller for LightHouse.
  Developped by Trent Rand, December 16th, 2014.

  Adapted from "RotationalTouchController_BETA.js" as of January 6th, 2015.
  Current Stable as of January 7th, 2015. 
*/

//NOTE, does not work as intended, but gets the job done.

var object : GameObject; //Spinner.
var spinSpeed = 5.0f; //Degrees per second.
var doorA : GameObject;
var doorASpeed = 5.0f;
var doorAPivot : Transform;
var doorB : GameObject;
var doorBSpeed = -5.0f;
var doorBPivot : Transform;

function Start () {

}

function Update () {
  for (var touch : Touch in Input.touches){
    if (Input.touchCount == 1) {
      if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved || touch.phase == TouchPhase.Stationary) {
        var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;

          if (Physics.Raycast (ray, hit, 100)) {
            if (hit.collider.gameObject == object) {
            
            	object.transform.Rotate(0.0f, 0.0f, spinSpeed);
            	doorA.transform.Rotate(0.0f, 0.0f, doorASpeed);
            	doorB.transform.Rotate(0.0f, 0.0f, doorBSpeed);
          	}
          }
        }
      }
    }
  }
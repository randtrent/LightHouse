#pragma strict

/*
  Basic Rotational Touch Controller for LightHouse
  Developped by Trent Rand, December 16th, 2014.

  Current Beta as of December 16th, 2014.
*/

var object : GameObject;
var speed = 30.0f;


function Start () {

}

function Update () {
  for (var touch : Touch in Input.touches){
    if (Input.touchCount == 1) {
      if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
        var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;

          if (Physics.Raycast (ray, hit, 100)) {
            if (hit.collider == object) {
             var plane : Plane = new Plane(Vector3.up, object.transform.position);
             var rayDistance : float;

                if(Physics.Raycast(ray, rayDistance)) {
                	object.transform.LookAt(ray.GetPoint(rayDistance));
          	}
          }
        }
      }
    }
  }
}
#pragma strict

/*
  Drag/Follow Touch Controller for LightHouse.
  Developped by Trent Rand, December 14th 2014.

  Beta as of December 14th 2014.
  Current Stable as of December 16th 2014. (Build 0.0.1)
*/

	var object : GameObject;
	var speed = 30.0f;

function Start () {

}

function Update () {
	for(var touch : Touch in Input.touches){

      if(Input.touchCount == 1) {
      	var ray = Camera.main.ScreenPointToRay(touch.position);
      	var hit : RaycastHit;

		    if (Physics.Raycast (ray, hit, 100)) {
        if (hit.collider.gameObject == object) {
        if(touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
        		var plane : Plane = new Plane(Vector3.up, transform.position);
				    var rayDistance : float;

    				if (plane.Raycast(ray, rayDistance)) {
		  			object.transform.position = Vector3.Lerp(transform.position, ray.GetPoint(rayDistance), Time.deltaTime * speed);
			  		object.transform.LookAt(ray.GetPoint(rayDistance));

					  }
				  }
			  }
		  }
	  }
  }
}
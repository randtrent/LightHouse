#pragma strict

/*  Tap to move touch controller for project LightHouse.
	Developped by Trent Rand, November 26th, 2014.
	
	Current beta as of November 26th, 2014.
*/

	var object : GameObject;
	var speed = 30.0f;

function Start () {

}

function Update () {
	  for (var touch : Touch in Input.touches) {
		var ray = Camera.main.ScreenPointToRay(touch.position);
		
		if (touch.phase == TouchPhase.Began || touch.phase == TouchPhase.Moved) {
			var plane : Plane = new Plane(Vector3.up, transform.position);
			var rayDistance : float;
			
			if (plane.Raycast(ray, rayDistance)) {
				object.transform.position = Vector3.MoveTowards(transform.position, ray.GetPoint(rayDistance), Time.deltaTime * speed);
	
			}
		}
    }
}
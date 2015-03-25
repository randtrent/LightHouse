#pragma strict

/*
  Dynmaic Drag/Follow Touch Controller for LightHouse.
  Developed by Trent Rand, December 16t,h 2014, while on a train.

  Current Beta as of December 16th 2014.
*/

	var object : GameObject; //What GameObject is attached to this script?
	var speed = 30.0f; // How fast is the GameObject allowed to keep up with the input?
	var Controlling; //Whether or not player input affects the GameObject. Set to False at Start.

function Start () {

}

function Update () {
	for (var touch : Touch in Input.touches){ //Hey UnityEngine! We're gonna be touching the screen!

    if (Input.touchCount == 1) { //Touching the screen? Only one finger? Perfect.
    if (touch.phase == TouchPhase.Began) { //First touch? Lets make sure you touched the GameObject.
      var rayInt = Camera.main.ScreenPointToRay(touch.position);
      var hit : RaycastHit;

		    if (Physics.Raycast (rayInt, hit, 100)) {
		 	  if (hit.collider == object) { //Player touched the GameObject?

		      Controlling = true; //Sucker, player now controls the GameObject.

		    }
		  }
    }

       	if (Controlling == true) {
       	  var ray = Camera.main.ScreenPointToRay(touch.position);
          var plane : Plane = new Plane(Vector3.up, object.transform.position); //Create a plane for the GameObject to move on.
			    var rayDistance : float;

				  if (plane.Raycast(ray, rayDistance)) {
				      object.transform.position = Vector3.Lerp(transform.position, ray.GetPoint(rayDistance), Time.deltaTime * speed);
				      object.transform.LookAt(ray.GetPoint(rayDistance)); //Move and Rotate the GameObject towards player input.

				  }
       	}

       	if (touch.phase == TouchPhase.Ended) { //Stopped touching the screen? ...
       	  Controlling = false; //Then stop controlling the GameObject.

      }
    }
	}
}

function OnTriggerEnter (other : Collider) {

  Controlling = false;

}
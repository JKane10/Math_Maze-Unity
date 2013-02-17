

function SwitchDoor()
{
collider.enabled = true;
renderer.enabled = true;
}

function doorActivate()
{
Wait();
}

 function Wait()
{
    collider.enabled = false;
    renderer.enabled = false;
}
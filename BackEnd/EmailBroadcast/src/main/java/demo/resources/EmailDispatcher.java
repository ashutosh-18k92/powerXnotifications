package demo.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/svc")
public class EmailDispatcher {
    @RequestMapping("/dispatch")
    public String dispatch(){
        return "your package has been dispatched";
    }
}

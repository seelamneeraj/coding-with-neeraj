import { Component, OnInit } from '@angular/core';
import { PythonTopicsService } from '../../services/python-topics.services';

@Component({
  selector: 'app-control-structures',
  templateUrl: './control-structures.component.html',
  styleUrls: ['./control-structures.component.scss']
})
export class ControlStructuresComponent implements OnInit {
  topicData: any;

  constructor(private pythonTopicsService: PythonTopicsService) {}

  ngOnInit(): void {
    this.pythonTopicsService.getTopicData().subscribe(data => {
      this.topicData = data.controlStructures;
    });
  }
}

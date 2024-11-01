// functions-and-modules.component.ts
import { Component, OnInit } from '@angular/core';
import { PythonTopicsService } from '../../services/python-topics.services';

@Component({
  selector: 'app-functions-and-modules',
  templateUrl: './functions-and-modules.component.html',
  styleUrls: ['./functions-and-modules.component.scss']
})
export class FunctionsAndModulesComponent implements OnInit {
  topicData: any;

  constructor(private pythonTopicsService: PythonTopicsService) {}

  ngOnInit(): void {
    this.pythonTopicsService.getTopicData().subscribe(data => {
      this.topicData = data.functionsAndModules;
    });
  }
}
